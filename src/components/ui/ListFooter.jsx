import Icon_right from "../icon/Icon_riight";

export const ListFooter = ({ children }) => {
  return (
    <li className="flex gap-2 items-center">
      <Icon_right width="12" height="12" />
      <span className="text-sm">{children}</span>
    </li>
  );
};
