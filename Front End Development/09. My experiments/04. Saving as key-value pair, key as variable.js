const favoritesList = this.props.favoritesList.map(oneFav => {
  const keyOneFav = _.uniqueId('favorite_');
  const interesting = {
    key: keyOneFav,
    value: [oneFav[0], oneFav[1]],
  };
  return (
    <FavoritesListItem key={keyOneFav} title={oneFav[0]} link={oneFav[1]} />
  );
});