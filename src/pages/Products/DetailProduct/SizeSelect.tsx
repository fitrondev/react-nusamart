import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SizeSelect = () => {
  return (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select Size" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Color</SelectLabel>
          <SelectItem value="S">Size S</SelectItem>
          <SelectItem value="M">Size M</SelectItem>
          <SelectItem value="L">Size L</SelectItem>
          <SelectItem value="XL">Size XL</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default SizeSelect;
