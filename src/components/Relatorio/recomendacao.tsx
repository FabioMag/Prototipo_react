import React from "react"

function Investimento() {
    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Recomendações de Investimentos</h2>
            <p className="mb-4">Veja abaixo as nossas recomendações de investimentos de acordo com o seu perfil:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className="bg-sky-500 text-white py-2 px-4">
                        <h4 className="text-lg font-bold">Investidores Conservadores</h4>
                    </div>
                    <div className="px-4 py-2">
                        <p>Para investidores conservadores, a Poupança, o Fundo Poupança e o Fundo SELIC são opções interessantes, com rendimentos anuais que superam a inflação e baixo risco.</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className=" bg-yellow-300 py-2 px-4">
                        <h4 className="text-lg font-bold">Investidores Moderados</h4>
                    </div>
                    <div className="px-4 py-2">
                        <p>Para investidores moderados, o Tesouro Direto (IPCA+), o FII e o Fundo Renda Fixa podem oferecer um bom equilíbrio entre risco e rentabilidade.</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className=" bg-red-600 text-white py-2 px-4">
                        <h4 className="text-lg font-bold">Investidores Agressivos</h4>
                    </div>
                    <div className="px-4 py-2">
                        <p>Para investidores agressivos, as Ações da Empresa ABC e o Fundo Mazzotini apresentam potencial de rentabilidade alto, mas com riscos consideráveis.</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Investimento
