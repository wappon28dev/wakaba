import Leaflet from "leaflet";
import { ResultAsync } from "neverthrow";
import { styled as p } from "panda/jsx";
import { type ReactElement } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { type SWRResponse } from "swr";
import useSWRImmutable from "swr/immutable";
import { match } from "ts-pattern";
import { ErrorScreen } from "@/components/ErrorScreen";
import { type Project } from "@/lib/classes/project";
import { S } from "@/lib/utils/patterns";
import "leaflet/dist/leaflet.css";
import { notifyTableErrorInToast } from "@/lib/utils/table";

Leaflet.Icon.Default.imagePath =
  "//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/";

function MarkerRenderer({ project }: { project: Project }): ReactElement {
  const projectIcon = new Leaflet.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const key = `project-${project.data.project_id}`;

  const swrProjectAbout = useSWRImmutable(key, async () =>
    (
      await ResultAsync.combine([
        project.resolveRelation(),
        project.resolveReferenced(),
      ])
        .map(([relation, referenced]) => ({
          relation,
          referenced,
        }))
        .mapErr(notifyTableErrorInToast("swrProjectAbout"))
    )._unsafeUnwrap(),
  );

  return (
    <>
      {match(swrProjectAbout)
        .with(
          S.Success,
          ({
            data: {
              referenced: { sponsorData },
            },
          }) => (
            <Marker
              key={project.data.project_id}
              icon={projectIcon}
              position={[
                sponsorData?.data.location.coordinates[1] ?? 0,
                sponsorData?.data.location.coordinates[0] ?? 0,
              ]}
            />
          ),
        )
        .otherwise(() => (
          <p.div>住所の取得に失敗しました</p.div>
        ))}
    </>
  );
}

export function Map({
  currentUserLocation,
  swrProjects,
}: {
  currentUserLocation: {
    lat: number | null;
    lng: number | null;
  };
  swrProjects: SWRResponse<Project[]>;
}): ReactElement {
  const currentUserIcon = new Leaflet.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  if (currentUserLocation.lat === null || currentUserLocation.lng === null) {
    return <p.div>位置情報が取得できませんでした。</p.div>;
  }
  return (
    <MapContainer
      center={[currentUserLocation.lat, currentUserLocation.lng]}
      style={{ height: "100%", width: "100%" }}
      zoom={16}
      zoomControl={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker
        icon={currentUserIcon}
        position={{
          lat: currentUserLocation.lat,
          lng: currentUserLocation.lng,
        }}
      />
      <Marker
        icon={currentUserIcon}
        position={{
          lat: currentUserLocation.lat,
          lng: currentUserLocation.lng,
        }}
      />
      {match(swrProjects)
        .with(S.Loading, () => <p.div>プロジェクトを読み込み中…</p.div>)
        .with(S.Success, ({ data }) =>
          data.map((project) => (
            <MarkerRenderer key={project.data.project_id} project={project} />
          )),
        )
        .otherwise(() => (
          <ErrorScreen title="プロジェクトの取得" />
        ))}
    </MapContainer>
  );
}
