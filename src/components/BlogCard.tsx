import React from "react";
import { Card } from "antd";
import { Space } from "./Styles";
import { SubHeader, Paragraph, Link } from "./Typography";

const { Meta } = Card;

interface BlogCardProps {
  imgURL: string;
  name: string;
  description: string;
  width: number;
  height: number;
  borderRadius: string;
  imageBorderRadius: string;
  linkColor: string;
  addHr: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
  imgURL,
  name,
  description,
  width,
  height,
  borderRadius,
  imageBorderRadius,
  linkColor,
  addHr,
}) => {
  return (
    <div>
      <Card
        bodyStyle={{ padding: "0" }}
        style={{ width, borderRadius }}
        cover={
          <img
            alt="example"
            src={imgURL}
            style={{ width, height, borderRadius: imageBorderRadius }}
          />
        }
      >
        <Meta
          style={{ padding: Space[20], textAlign: "left" }}
          title={<SubHeader>{name}</SubHeader>}
          description={
            <div>
              <Paragraph color="#1F1F1E">{description}</Paragraph>
              <Link
                color={linkColor}
                style={{ textAlign: "end", paddingBottom: "12px" }}
              >
                Read More
              </Link>
            </div>
          }
        />
        {addHr && (
          <hr style={{ border: "3px solid #3E1347", margin: "0" }}></hr>
        )}
      </Card>
    </div>
  );
};

export default BlogCard;
