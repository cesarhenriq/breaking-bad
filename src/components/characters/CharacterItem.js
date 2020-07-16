import React from 'react';

const CharacterItem = ({ item }) => {
  const formatDate = (item) => {
    if (item?.birthday === 'Unknown') return 'Desconhecido';
    const [mes, dia, ano] = item?.birthday.split('-');
    return `${dia}/${mes}/${ano}`;
  };

  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item?.img} alt="" />
        </div>

        <div className="card-back">
          <h1>{item?.name}</h1>
          <ul>
            <li>
              <strong>Nome:</strong> {item?.portrayed}
            </li>
            <li>
              <strong>Personagem:</strong> {item?.nickname}
            </li>
            <li>
              <strong>Data Nascimento:</strong> {formatDate(item)}
            </li>
            <li>
              <strong>Status:</strong> {item?.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
