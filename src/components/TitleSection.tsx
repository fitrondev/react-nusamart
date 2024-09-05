const TitleSection = ({ title }: { title?: string }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="font-medium text-muted-foreground">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};
export default TitleSection;
