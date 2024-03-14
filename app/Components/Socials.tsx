import socials from "../data/socials.json";

const Socials = () => {
  return (
    <div className="mb-12" id="connect-with-me">
      <h2 className="font-medium text-4xl">Socials</h2>

      {socials.map((social, i) => (
        <div key={i}>
          {social.name} - <a href={`${social.url}`}>@{social.username}</a>
        </div>
      ))}
    </div>
  );
};

export default Socials;
