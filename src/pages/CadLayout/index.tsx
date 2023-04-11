import React, { useState } from 'react';

import CampoButton from '@app/components/SubmitButton'
import LimpaCampoButton from '@app/components/SubmitButton'
import SubmitButton from '@app/components/SubmitButton'

import Grid from '@app/components/Table/LayoutGrid'
import { useProcessData } from '@app/hooks/processData'

function Formulario() {
    const processData = useProcessData((p) => p.data)

    const [campos, setCampos] = useState([]);
    const [tipoArquivo, setTipoArquivo] = useState('');
    const [nomeArquivo, setNomeArquivo] = useState('');
    const [delimitador, setDelimitador] = useState('');

    function adicionarCampo() {
        setCampos([...campos, { nome: '' }]);
    }

    function removerCampo(index) {
        const novoCampos = [...campos];
        novoCampos.splice(index, 1);
        setCampos(novoCampos);
    }

    function alterarNome(index, nome) {
        const novoCampos = [...campos];
        novoCampos[index].nome = nome;
        setCampos(novoCampos);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formData = {
            tipoArquivo,
            nomeArquivo,
            delimitador,
            campos,
        };
        // Aqui você pode enviar os dados para o servidor usando uma API HTTP, por exemplo.
        console.log(formData);
    }

    return (
        <div className="w-full max-w-7xl bg-white border border-gray-200 rounded-lg sm:p-6 md:p-8 shadow-md mx-auto text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
                <h1 className="text-2xl font-bold mb-4">Cadastro de Layout de Arquivos</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="tipoArquivo" className="block text-gray-700 font-bold mb-2">
                            Tipo de Arquivo:
                        </label>
                        <input
                            id="tipoArquivo"
                            name="tipoArquivo"
                            type="text"
                            className="shadow appearance-none border border-gray-400/30 font-sm rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100/80 min-h-[48px]"
                            value={tipoArquivo}
                            onChange={(event) => setTipoArquivo(event.target.value)}
                            placeholder='Ex. CSV'
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="nomeArquivo" className="block text-gray-700 font-bold mb-2">
                            Nome do Arquivo:
                        </label>
                        <input
                            id="nomeArquivo"
                            name="nomeArquivo"
                            type="text"
                            className="shadow appearance-none border border-gray-400/30 font-sm rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100/80 min-h-[48px]"
                            value={nomeArquivo}
                            onChange={(event) => setNomeArquivo(event.target.value)}
                            placeholder='Ex. clintes.csv'
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="delimitador" className="block text-gray-700 font-bold mb-2">
                            Delimitador:
                        </label>
                        <input
                            id="delimitador"
                            name="delimitador"
                            type="text"
                            className="shadow appearance-none border border-gray-400/30 font-sm rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100/80 min-h-[48px]"
                            value={delimitador}
                            onChange={(event) => setDelimitador(event.target.value)}
                            placeholder='Ex. ;'
                        />

                    </div>
                    <div className="mb-4">
                        <h2 className="text-lg font-bold mb-2">Campos:</h2>
                        <div className="flex flex-wrap gap-4">
                            {campos.map((campo, index) => (
                                <div key={index} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
                                    <div className="mb-4">
                                        <label htmlFor={`campo-nome-${index}`} className="block text-gray-700 font-bold mb-2">
                                            Nome:
                                        </label>
                                        <input
                                            id={`campo-nome-${index}`}
                                            name={`campo-nome-${index}`}
                                            type="text"
                                            className="shadow appearance-none border border-gray-400/30 font-sm rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100/80 min-h-[48px]"
                                            value={campo.nome}
                                            onChange={(event) => alterarNome(index, event.target.value)}
                                        />
                                    </div>

                                    <LimpaCampoButton
                                        fullWidth
                                        className="mt-4 bg-red-500 hover:bg-red-700"
                                        type="submit"
                                        onClick={() => removerCampo(index)}
                                    >
                                        Adicionar Campo
                                    </LimpaCampoButton>
                                </div>
                            ))}
                        </div>

                        <CampoButton
                            fullWidth
                            className="w-1/2 mt-4"
                            type="submit"
                            onClick={adicionarCampo}
                        >
                            Adicionar Campo
                        </CampoButton>
                    </div>

                    <br />

                    <SubmitButton
                        fullWidth
                        className="mt-4 bg-green-500 hover:bg-green-700"
                        type="submit"
                    >
                        Enviar
                    </SubmitButton>
                </form>

                <br />
                <br />
                <h1 className="text-2xl font-bold mb-4">Arquivos Importados</h1>
                <div className="w-full h-full block">
                    <Grid data={processData} />
                </div>
            </div>
        </div>

    );
}

export default Formulario;