import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ColorSelect = () => {
  return (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select Color" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Color</SelectLabel>
          <SelectItem value="red">
            <div className="inline-flex items-center gap-2">
              <div className="size-4 bg-red-600 rounded-full" />
              <p>Red</p>
            </div>
          </SelectItem>

          <SelectItem value="blue">
            <div className="inline-flex items-center gap-2">
              <div className="size-4 bg-blue-600 rounded-full" />
              <p>Blue</p>
            </div>
          </SelectItem>

          <SelectItem value="green">
            <div className="inline-flex items-center gap-2">
              <div className="size-4 bg-green-600 rounded-full" />
              <p>Green</p>
            </div>
          </SelectItem>

          <SelectItem value="yellow">
            <div className="inline-flex items-center gap-2">
              <div className="size-4 bg-yellow-600 rounded-full" />
              <p>Yellow</p>
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default ColorSelect;
