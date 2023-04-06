import React from "react"
import { Fragment } from "react"

const Upload = () => {
    return (
        <div>
            <div className="page-title">
                <div className="title_left">
                    <h3 style={{ marginBottom: "20px" }}>Importação de Arquivo</h3>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12">
                    <form>
                        <div className="form-group">
                            <label htmlFor="fileInput">
                                Selecione um arquivo para fazer a importação dos dados
                            </label>
                            <input type="file" className="form-control-file" id="fileInput" />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Enviar
                        </button>
                    </form>

                </div>
            </div>

            <div className="page-title">
                <div className="title_left">
                    <h3 style={{ marginBottom: "20px" }}>Arquivos Importados</h3>
                </div>
            </div>
        </div>
    );
};

export default Upload