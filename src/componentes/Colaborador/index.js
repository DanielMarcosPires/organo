import "./colaborador.css";
import { GrClose } from "react-icons/gr";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
  function favoritar() {
    aoFavoritar(colaborador.id);
  }

  const propsFavorito = {
    size: 25,
    onclick: favoritar,
  };

  return (
    <div className="colaborador">
      <GrClose
        size={25}
        className="deletar"
        onClick={() => aoDeletar(colaborador.id)}
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className="favoritar">
          {colaborador.favorito ? (
            <MdFavorite {...propsFavorito} color="#ff0000" />
          ) : (
            <MdFavoriteBorder {...propsFavorito} color="#ff0000" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
