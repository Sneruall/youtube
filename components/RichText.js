import { render } from "storyblok-rich-text-react-renderer";
import Youtube from "./Youtube";

const RichText = ({ blok }) => {
  return (
    <div>
      {blok.content ? (
        render(blok.content, {
          blokResolvers: {
            youtube: (props) => <Youtube key={props._uid} blok={props} />,
          },
          defaultBlokResolver: (name, props) => (
            <div>
              <p>Unsupported blok: {name}</p>
              <pre>{JSON.stringify(props, null, 2)}</pre>
            </div>
          ),
        })
      ) : (
        <p>No content available</p>
      )}
    </div>
  );
};

export default RichText;
