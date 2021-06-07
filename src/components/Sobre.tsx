import React, { FormEvent } from 'react';

import { toast } from 'react-toastify';

const Sobre: React.FC = () => {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    toast.success("Tudo certo");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Idade" />
        <input type="text" placeholder="Email" />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default Sobre;
