import { Input, Button } from "@teddy/design-system";
import { useState } from "react";
import type { FormEvent } from "react";
import type { WelcomeProps } from "../../types/WelcomeTypes";

const WelcomeScreen: React.FC<WelcomeProps> = ({ onEnter }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name.trim() !== "") {
      onEnter(name);
    }
  };

  return (
    <div className="p-4 w-screen h-screen flex flex-col items-center justify-center gap-4">
      <div className="w-full max-w-[521px] gap-5 flex flex-col">
        <h1 className="text-center sm:text-4xl text-3xl">Olá, seja bem-vindo!</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Input
            placeholder="Digite seu nome:"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Button
            variant="solid"
            fullWidth
            type="submit"
          >
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default WelcomeScreen;
