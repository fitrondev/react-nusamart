import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductDescription = () => {
  return (
    <Tabs defaultValue="description" className="flex flex-col lg:items-start">
      <TabsList>
        <TabsTrigger value="description" className="font-semibold">
          Description
        </TabsTrigger>
        <TabsTrigger value="care" className="font-semibold">
          Care Guide
        </TabsTrigger>
        <TabsTrigger value="size" className="font-semibold">
          Size Guide
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="description"
        className="text-sm font-medium text-justify space-y-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          repellat adipisci debitis excepturi voluptatum libero, magni ullam
          nulla mollitia sunt nesciunt quibusdam obcaecati aspernatur corporis
          numquam maxime quidem, in assumenda impedit voluptatibus optio! Sunt
          nulla minima veritatis praesentium dolore libero? Quasi, mollitia
          tempore deserunt sit assumenda magni in ad ab perferendis eveniet
          repellat similique cupiditate quibusdam atque animi sapiente facere
          enim dolore omnis ea fugiat! Nemo tempore eos voluptate doloribus.
        </p>
        <p>
          assumenda veniam placeat illo totam corrupti rerum provident. Dolor
          ipsa odit in unde vero cumque accusantium impedit, a vel voluptatem.
          Officia, eveniet. Accusantium, temporibus sequi. Ipsa obcaecati
          nostrum quae. Iusto odio animi perspiciatis. Qui ad porro provident
          reprehenderit nulla inventore omnis nesciunt excepturi deleniti. Fugit
          aspernatur, voluptate necessitatibus explicabo nemo aut voluptatibus
          magnam a, perferendis tempora cupiditate doloribus, similique dolore
          labore quam! Magni eaque nemo officiis adipisci ea ipsum quas libero,
          nesciunt est obcaecati non. Ab eligendi magnam voluptatibus commodi!
        </p>
      </TabsContent>
      <TabsContent
        value="care"
        className="text-sm font-medium text-justif space-y-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ad
          ipsa sapiente, aliquam cupiditate temporibus dolor. Quae officia
          consequatur officiis esse eum, perspiciatis dolorum quasi aperiam.
          Modi eum enim nemo, hic error sunt magnam recusandae atque dolor, unde
          iusto quis id eos exercitationem expedita nam quod reiciendis in ipsa
          illo.
        </p>
      </TabsContent>
      <TabsContent
        value="size"
        className="text-sm font-medium text-justify space-y-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ad
          ipsa sapiente, aliquam cupiditate temporibus dolor. Quae officia
          consequatur officiis esse eum, perspiciatis dolorum quasi aperiam.
          Modi eum enim nemo, hic error sunt magnam recusandae atque dolor, unde
          iusto quis id eos exercitationem expedita nam quod reiciendis in ipsa
          illo.
        </p>
      </TabsContent>
    </Tabs>
  );
};
export default ProductDescription;
