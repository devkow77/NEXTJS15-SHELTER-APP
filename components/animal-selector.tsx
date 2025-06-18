import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function AnimalSelector() {
  return (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select a animal type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Animal Type</SelectLabel>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="dogs">Dogs</SelectItem>
          <SelectItem value="cats">Cats</SelectItem>
          <SelectItem value="rabbits">Rabbits</SelectItem>
          <SelectItem value="snakes">Snakes</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default AnimalSelector;
