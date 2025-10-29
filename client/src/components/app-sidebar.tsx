import { Link, useLocation } from "wouter";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Home, Wind, Waves, Flame } from "lucide-react";

const menuItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Activity 1",
    subtitle: "Hybrid Biogas-Wind System",
    url: "/activity-1",
    icon: Wind,
  },
  {
    title: "Activity 2",
    subtitle: "Wave Energy Desalination",
    url: "/activity-2",
    icon: Waves,
  },
  {
    title: "Activity 3",
    subtitle: "Geothermal Power Plant",
    url: "/activity-3",
    icon: Flame,
  },
];

export function AppSidebar() {
  const [location] = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="p-6 border-b border-sidebar-border">
        <div>
          <h2 className="text-lg font-semibold text-sidebar-foreground">
            Renewable Energy
          </h2>
          <p className="text-xs text-muted-foreground mt-1">
            Systems Portfolio
          </p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location === item.url}>
                    <Link href={item.url} data-testid={`link-${item.url.substring(1) || 'home'}`}>
                      <item.icon className="w-4 h-4" />
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">{item.title}</span>
                        {item.subtitle && (
                          <span className="text-xs text-muted-foreground">
                            {item.subtitle}
                          </span>
                        )}
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-6 border-t border-sidebar-border">
        <p className="text-xs text-muted-foreground">
          FT-IV Activity Portfolio
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          © 2025
        </p>
      </SidebarFooter>
    </Sidebar>
  );
}
