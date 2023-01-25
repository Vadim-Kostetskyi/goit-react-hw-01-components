import css from './Statistic.module.css';
import PropTypes from 'prop-types';

function generateColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistic}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.statList}>
        {stats.map(({ label, percentage, id }) => {
          const randomColor = generateColor();
          return (
            <li
              className={css.item}
              key={id}
              style={{
                backgroundColor: `${randomColor}`,
              }}
            >
              <span className={css.label}>{id}</span> <br />
              <span className={css.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, percentage: PropTypes.number })
  ),
};

export default Statistics;
