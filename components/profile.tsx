"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Profile() {
  const user = {
    name: "Kacper",
    email: "kacper@email.com",
    avatar: "/animal-avatar-bear.svg",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 transition hover:bg-white/10">
          {/* Lewa kolumna: nickname + email */}
          <div className="hidden flex-col text-right text-sm text-black md:flex dark:text-white">
            <span className="leading-none font-medium">{user.name}</span>
            <span className="text-xs text-black/70 dark:text-white/70">
              {user.email}
            </span>
          </div>
          {/* Prawa: avatar */}
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.avatar} alt={`User ${user.name}`} />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="bg-popover w-48 rounded-xl border border-white/10 p-2 shadow-lg backdrop-blur-md"
      >
        <DropdownMenuLabel>Moje konto</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => console.log("Profil")}>
          Profil
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log("Ustawienia")}>
          Ustawienia
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="font-semibold text-red-600"
          onClick={() => console.log("Wyloguj się")}
        >
          Wyloguj się
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
