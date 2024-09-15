import { useEffect, useState } from "react";

export const useApiUsuario = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [totalOnline, setTotalOnline] = useState(0);

    useEffect(() => {
        getUsuarios();
    }, []);

    const getUsuarios = async () => {
        try {
            const response = await fetch("http://localhost:3000/usuarios");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            setUsuarios(data);
            setTotalOnline(data.filter((usuario) => usuario.isOnline === true).length);
            console.log("Total online:", totalOnline);
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
            setError(error.message || "Erro desconhecido");
        } finally {
            setLoading(false);
        }
    };

    const login = async (dadosUsuario) => {
        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                body: JSON.stringify(dadosUsuario),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                alert("Usuário ou senha inválidos!");
                return;
            }

            const data = await response.json();
            const token = data.Authorization;

            localStorage.setItem("authToken", token);
            localStorage.setItem("usuarioLogado", dadosUsuario.email);

            setTotalOnline(totalOnline + 1);
            console.log("Total online:", totalOnline);
            atualizarStatusUsuario(data.nome, data.usuarioId, true);
            console.log(totalOnline);

            window.location.href = "/dashboard";
        } catch (error) {
            console.error("Erro ao fazer login:", error);
        }
    };


    const cadastrarUsuario = async (dadosUsuario) => {
        const usuarioAdicionar = {
            ...dadosUsuario,
            isOnline: false
        };

        if (!usuarioAdicionar.nome) {
            alert("O usuário precisa ter um nome!");
            return;
        }

        try {
            // const response = await fetch(`${import.meta.env.VITE_API_HOST}/usuarios`, {
            const response = await fetch("http://localhost:3000/usuarios", {
                method: "POST",
                body: JSON.stringify(usuarioAdicionar),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`Erro: ${response.status} - ${response.statusText}`);
            }

            alert("Usuário cadastrado com sucesso!");
            getUsuarios();
        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error.message || "Erro desconhecido");
            alert("Erro ao cadastrar usuário!");
        }
    };

    const atualizarStatusUsuario = async (dadosUsuario, id, status) => {
        const usuarioAtualizar = {
            ...dadosUsuario,
            isOnline: status
        };

        console.log(id);
        console.log(dadosUsuario);
        console.log(status);
        try {
            // const response = await fetch(`${import.meta.env.VITE_API_HOST}/login/${id}`, {
            const response = await fetch(`http://localhost:3000/login/${id}`, {
                method: "PUT",
                body: JSON.stringify(usuarioAtualizar),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`Erro: ${response.status} - ${response.statusText}`);
            }

            console.log("Usuário atualizado com sucesso!");
            getUsuarios();
        } catch (error) {
            console.error("Erro ao atualizar usuário:", error.message || "Erro desconhecido");
        }
    };

    const logout = async (emailUsuarioLogado) => {
        try {
            // const response = await fetch(`${import.meta.env.VITE_API_HOST}/usuarios`);
            const response = await fetch("http://localhost:3000/usuarios");

            if (!response.ok) {
                throw new Error(`Erro: ${response.status} - ${response.statusText}`);
            }

            const dados = await response.json();

            dados.forEach((usuario) => {
                if (usuario.email === emailUsuarioLogado) {
                    atualizarStatusUsuario(usuario, usuario.id, false);
                    setTotalOnline((totalOnline) => totalOnline - 1);
                }
            });
        } catch (error) {
            console.error("Erro ao fazer logout:", error.message || "Erro desconhecido");
        }
    };

    return {
        usuarios,
        loading,
        error,
        totalOnline,
        getUsuarios,
        cadastrarUsuario,
        logout,
        atualizarStatusUsuario,
        login
    };

}