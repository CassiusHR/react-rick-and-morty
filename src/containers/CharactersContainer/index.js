import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCharacters } from "../../redux/characters/thunks";
import anime from "animejs";

const CharacterContainer = props => {
  const { getCharacters, loading, characters, error, fetched } = props;

  useEffect(() => {
    !fetched && getCharacters();
  }, []);
  useEffect(() => {
    const cards = document.querySelectorAll(".character-item");
    cards.forEach((e, i) => {
      anime
        .timeline({
          easing: "easeOutExpo",
          duration: 600
        })
        .add({
          targets: e,
          duration: 300,
          opacity: [0, 1],
          translateY: [30, 0],
          delay: () => i * 100,
          complete: () => {
            anime({
              targets: e.querySelector(".character-header"),
              easing: "easeOutExpo",
              duration: 600,
              opacity: [0, 1],
              translateY: [-30, 0],
              delay: 300
            });
          }
        });
    });
  });

  return (
    <div className="characters-container">
      <header className="container-header">{error}</header>
      {loading && <div className="loading-container">Cargando personajes</div>}
      {!loading &&
        characters.map((character, index) => (
          <div className="character-item" key={index}>
            <div
              className="character-header"
              style={{
                background: `url(${character.image}) center center /cover`,
                height: "200px"
              }}
            />
            <div>name: {character.name}</div>
            <div>species: {character.species}</div>
            <div>origin: {character.origin.name}</div>
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = state => {
  const { loading, entities, error, fetched } = state.characters;

  return {
    loading,
    characters: entities,
    error,
    fetched
  };
};
const mapDispatchToProps = {
  getCharacters
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterContainer);
