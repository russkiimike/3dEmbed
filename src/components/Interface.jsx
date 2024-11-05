import { Affix, Button, Stack, FileInput } from "@mantine/core";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";

const Interface = () => {
  const { animations, animationIndex, setAnimationIndex } =
    useCharacterAnimations();

  const handlePropUpload = (file) => {
    if (file) {
      const url = URL.createObjectURL(file);
      window.dispatchEvent(new CustomEvent('load-prop', { detail: { url } }));
    }
  };

  return (
    <Affix position={{ bottom: 50, right: 20 }}>
      <Stack>
        {animations.map((animation, index) => (
          <Button
            key={animation}
            variant={index === animationIndex ? "filled" : "light"}
            onClick={() => setAnimationIndex(index)}
          >
            {animation}
          </Button>
        ))}
      </Stack>
    </Affix>
  );
};

export default Interface;