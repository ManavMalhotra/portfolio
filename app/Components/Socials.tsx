import socials from "../data/socials.json";

const Socials = () => {
  return (
    <div className="mb-12">
      <h2 className="font-medium text-8xl">Socials</h2>

      {socials.map((social, i) => (
        <div key={i}>
          {social.name} - <a href={`${social.url}`}>@{social.username}</a>
        </div>
      ))}
    </div>
  );
};

export default Socials;
