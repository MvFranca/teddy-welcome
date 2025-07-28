import { Input, Button } from "@teddy/design-system";

const WelcomeScreen = () => {
  console.log(Button);

  return (
    <div className="p-4 w-screen h-screen flex flex-col items-center justify-center gap-4">
      <div className="w-full max-w-[521px] gap-5 flex flex-col">
        <h1 className="text-center sm:text-4xl text-3xl">Olá, seja bem-vindo!</h1>
        <Input placeholder="Digite seu nome:" fullWidth />
        <Button
          variant="solid"
          fullWidth
          onClick={() => alert("Primary button clicked!")}
        >
          Entrar
        </Button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
