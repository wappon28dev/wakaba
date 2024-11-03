import { createFileRoute } from "@tanstack/react-router";
import { styled as p, VStack } from "panda/jsx";
import { useEffect, useState } from "react";
import useSWRImmutable from "swr/immutable";
import { HalfModal } from "./-components/HalfModal";
import { Map } from "./-components/Map";
import { svaDrawer } from "@/components/sva/drawer";
import { Project } from "@/lib/classes/project";
import { notifyTableErrorInToast } from "@/lib/utils/table";
import { ProjectDetail } from "@/routes/projects/-components/ProjectDetail";

export const Route = createFileRoute("/overview/")({
  component: () => {
    const cls = svaDrawer({});
    const [projectId, setProjectId] = useState<string>("");
    const [responsiveDirection, setResponsiveDirection] = useState<
      "bottom" | "top" | "left" | "right"
    >("bottom");
    const [currentUserLocation, setCurrentUserLocation] = useState<{
      lat: number | null;
      lng: number | null;
    }>({
      lat: null,
      lng: null,
    });

    const swrProjects = useSWRImmutable("projects", async () =>
      (
        await Project.factories
          .fetchAll()
          .mapErr(notifyTableErrorInToast("swrProjects"))
      )._unsafeUnwrap(),
    );

    useEffect(() => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          setCurrentUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        });
      }
    }, []);

    useEffect(() => {
      function handleResize(): void {
        if (window.innerWidth < 768) {
          setResponsiveDirection("bottom");
        } else {
          setResponsiveDirection("right");
        }
      }

      handleResize();
      window.addEventListener("resize", () => {
        handleResize();
      });
      return () => {
        window.removeEventListener("resize", () => {
          handleResize();
        });
      };
    }, []);

    return (
      <p.div>
        <Map
          currentUserLocation={currentUserLocation}
          setProjectId={setProjectId}
          swrProjects={swrProjects}
        />
        <HalfModal projectId={projectId} direction={responsiveDirection}>
          <VStack maxW="768px">
            {responsiveDirection === "bottom" && <div className={cls.handle} />}
            <p.div h="100%" maxW={{ base: "auto", md: "auto" }} w="100%">
              <ProjectDetail params={{ uuid: projectId }} />
            </p.div>
          </VStack>
        </HalfModal>
      </p.div>
    );
  },
});
