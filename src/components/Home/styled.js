import styled from "styled-components";
import { Plus } from "@styled-icons/feather/Plus";
import { Comment } from "@styled-icons/evil/Comment";
import { Leaf } from "@styled-icons/entypo/Leaf";

export const PlusIcon = styled(Plus)`
  color: #000;
  width: 40px;
  height: 40px;
  transition: all 0.2s ease-out;
  &:hover {
    color: #2aa477;
  }
`;

export const CommentIcon = styled(Comment)`
  color: #444444;
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin-right: 10px;
`;

export const LeafIcon = styled(Leaf)`
  color: #444444;
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:hover {
    color: #009688;
  }
`;
