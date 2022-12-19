import React from "react";
import { useForm } from "react-hook-form";

import { MdEmail, MdLock } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import {
  Container,
  HaveAccount,
  Insertion,
  Login,
  Notice,
  Row,
  SubTitleRegister,
  Text,
  TitleRegister,
  Wrapper,
} from "./styles";

const Register = () => {

  const { control } = useForm();

  return (
    <>
      <Header />
      <Container>
        <Text>
          A plataforma para você aprender com experts, dominar as principais
          tecnologias e entrar mais rápido nas empresas mais desejadas.
        </Text>
        <Wrapper>
          <TitleRegister>Comece agora grátis</TitleRegister>
          <SubTitleRegister>
            Crie sua conta e make the change._
          </SubTitleRegister>
          <form>
            <Insertion>
              <Input
                leftIcon={<IoPersonSharp />}
                name="name"
                placeholder="Nome completo"
                control={control}
                />
              <Input
                leftIcon={<MdEmail />}
                name="email"
                placeholder="E-mail"
                control={control}
                />
              <Input
                leftIcon={<MdLock />}
                name="password"
                placeholder="Senha"
                control={control}
                type="password"
              />
              <Button
                variant="secundary"
                title="Criar minha conta"
                type="submit"
              ></Button>
            </Insertion>
          </form>
          <Notice>
            Ao clicar em "criar minha conta grátis", declaro que aceito as
            Políticas de Privacidade e os Termos de Uso da DIO.
          </Notice>
          <Row>
            <HaveAccount>Já tenho conta.</HaveAccount>
            <Login> Fazer login.</Login>
          </Row>
        </Wrapper>
      </Container>
    </>
  );
};

export { Register };
