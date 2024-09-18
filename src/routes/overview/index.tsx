import { createFileRoute } from "@tanstack/react-router";
import { Box, styled as p } from "panda/jsx";
import { Map } from "./-components/Map";

export const Route = createFileRoute("/overview/")({
  component: () => {
    const currentUserLocation = {
      lat: 35.6895,
      lng: 139.6917,
    };

    return (
      <p.div>
        <Box maxH="100dvh" width="100%">
          <Map currentUserLocation={currentUserLocation} />
        </Box>
      </p.div>
    );
  },
});
