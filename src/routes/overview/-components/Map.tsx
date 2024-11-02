import { Link } from "@tanstack/react-router";
import Leaflet from "leaflet";
import { Box, styled as p } from "panda/jsx";
import { type ReactElement } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

Leaflet.Icon.Default.imagePath =
  "//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/";

type projects = {
  amount_of_money: number;
  comment_ids: string[];
  created_at: string;
  deadline: string;
  key_visual: string | null;
  name: string;
  project_id: string;
  sponsor_data_id: string | null;
  territory_id: string;
  fruit_ids: string[];
  location: {
    lat: number;
    lng: number;
  };
  motivation: string;
  report_ids: string[];
  sponsor_id: string;
  target_amount_of_money: number;
};

export function Map({
  currentUserLocation,
  projects,
}: {
  currentUserLocation: {
    lat: number | null;
    lng: number | null;
  };
  projects: projects[];
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

  if (currentUserLocation.lat === null || currentUserLocation.lng === null) {
    return <p.div>位置情報が取得できませんでした。</p.div>;
  }
  return (
    <MapContainer
      center={[currentUserLocation.lat, currentUserLocation.lng]}
      style={{ height: "400px", width: "100%" }}
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
      {projects.map((project) => (
        <Marker
          key={project.project_id}
          icon={projectIcon}
          position={[project.location.lat, project.location.lng]}
        >
          <Popup closeButton={false}>
            <Link to={`/project/${project.project_id}`}>
              <Box lineHeight="none" width={150}>
                <p.p fontSize="xl">{project.name}</p.p>
                <p.span>現在金額: ¥{project.amount_of_money}</p.span>
                {project.motivation}
              </Box>
            </Link>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
