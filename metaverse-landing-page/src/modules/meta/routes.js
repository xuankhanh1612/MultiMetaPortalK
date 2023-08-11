import MetaDetails from "./pages/MetaDetails";

export const metaRoute = [
  {
    path: "/metaverse/:id",
    component: MetaDetails,
    noAppLayout: true,
    unauthenticated: true,
  },
];
