import { Logo } from "../Logo";
import { SidebarRoutes } from "../SidebarRoutes";
import { SidebarProps } from "./Sidebar.types";

export function Sidebar(props: SidebarProps) {

  const {} = props
  return (
    <>
    <div className="py-6 ">
      <Logo />
    </div>
    <SidebarRoutes />
    </>
  )
}
