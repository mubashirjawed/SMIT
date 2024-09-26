import { Gauge, Layers2, LayoutList, User } from "lucide-react";
import React from "react";

export const Sidebar = () => {
  const link = [
    {
      name: "Dashboard",
      link: "/admin",
      icon: <Gauge />,
    },
    {
      name: "Posts",
      link: "/admin/posts",
      icon: <LayoutList />,
    },
    {
      name: "Categories",
      link: "/admin/categories",
      icon: <Layers2 />,
    },
    {
      name: "Authors",
      link: "/admin/authors",
      icon: <User />,
    },
  ];
  return <div>Sidebar</div>;
};
