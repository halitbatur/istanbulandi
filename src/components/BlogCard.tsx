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
}) => {
  return (
    <div>
      <Card
        bodyStyle={{ padding: Space[20] }}
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
          style={{ textAlign: "left" }}
        />
      </Card>
    </div>
  );
};

export default BlogCard;
