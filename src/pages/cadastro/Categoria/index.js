import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import styled from "styled-components";

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "",
  };

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infos) {
    //const { getAttribute, value } = infos.target;
    // const getAttribute = infos.target.getAttribute;
    // const value = infos.target.value;
    setValue(infos.target.getAttribute("name"), infos.target.value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form
        style={{ background: values.cor }}
        onSubmit={function submitHandler(infos) {
          infos.preventDefault();
          setCategorias([...categorias, values]);
          setValues(valoresIniciais);
        }}
      >
        <FormField
          tag="input"
          type="text"
          name="nome"
          label="Nome da categoria:"
          onChange={handleChange}
          value={values.nome}
        />
        <br />
        <FormField
          tag="textarea"
          type="textarea"
          name="descricao"
          label="Descrição:"
          onChange={handleChange}
          value={values.descricao}
        />
        <br />
        <FormField
          tag="input"
          type="color"
          name="cor"
          label="Cor:"
          onChange={handleChange}
          value={values.cor}
        />
        <br />
        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, index) => {
          return (
            <li color={categoria.cor} key={`${categoria}${index}`}>
              {categoria.nome}
            </li>
          );
        })}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
