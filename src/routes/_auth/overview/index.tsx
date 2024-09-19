import { createFileRoute } from "@tanstack/react-router";
import { Box, styled as p } from "panda/jsx";
import { useEffect, useState } from "react";
import { Map } from "./-components/Map";

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

export const Route = createFileRoute("/_auth/overview/")({
  component: () => {
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
    });

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
      <p.div>
        <Box maxH="100dvh" width="100%">
          <Map currentUserLocation={currentUserLocation} projects={projects} />
        </Box>
        周辺で募集中のプロジェクト (この下にプロジェクトカードを並べるか悩み中)
      </p.div>
    );
  },
});
