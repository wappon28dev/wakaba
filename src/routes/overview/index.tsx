import { createFileRoute } from "@tanstack/react-router";
import { styled as p, VStack } from "panda/jsx";
import { useEffect, useState } from "react";
import { HalfModal } from "./-components/HalfModal";
import { Map } from "./-components/Map";
import { svaDrawer } from "@/components/sva/drawer";
import { ProjectDetail } from "@/routes/projects/-components/ProjectDetail";

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

export const Route = createFileRoute("/overview/")({
  component: () => {
    const cls = svaDrawer({});
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

    const projects: projects[] = [
      {
        amount_of_money: 100,
        comment_ids: ["1"],
        created_at: "2021-09-06T00:00:00Z",
        deadline: "2021-09-06T00:00:00Z",
        key_visual: "https://via.placeholder.com/150",
        name: "Project 1",
        project_id: "1",
        sponsor_data_id: "1",
        territory_id: "1",
        fruit_ids: ["1"],
        location: { lat: 35.688, lng: 139.69 },
        motivation: "motivation",
        report_ids: ["1"],
        sponsor_id: "1",
        target_amount_of_money: 1000,
      },
      {
        amount_of_money: 200,
        comment_ids: ["2"],
        created_at: "2021-09-06T00:00:00Z",
        deadline: "2021-09-06T00:00:00Z",
        key_visual: "https://via.placeholder.com/150",
        name: "Project 2",
        project_id: "2",
        sponsor_data_id: "2",
        territory_id: "2",
        fruit_ids: ["2"],
        location: { lat: 35.6895, lng: 139.69397 },
        motivation: "motivation",
        report_ids: ["2"],
        sponsor_id: "2",
        target_amount_of_money: 2000,
      },
    ];

    return (
      <p.div
        h="50%"
        xlDown={{
          h: "50%",
        }}
      >
        <Map currentUserLocation={currentUserLocation} projects={projects} />
        <HalfModal direction={responsiveDirection}>
          <VStack maxW="768px">
            {responsiveDirection === "bottom" && <div className={cls.handle} />}
            <p.div h="100%" maxW={{ base: "auto", md: "auto" }} w="100%">
              <ProjectDetail
                params={{ uuid: "08a78db3-f61b-4aac-bf7c-cad2fc45ebad" }}
              />
            </p.div>
          </VStack>
        </HalfModal>
      </p.div>
    );
  },
});
