import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ReviewProps {
  img: string;
  title: string;
  role: string;
  description: string;
}

const Review = ({ img, title, role, description }: ReviewProps) => {
  return (
    <div className=" max-w-3xl  flex justify-left">
      <Card>
        <CardHeader className="flex flex-row gap-4">
          <Avatar>
            <AvatarImage src={img} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{role}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className=" max-w-3xl">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Review;
