import { bind } from '@/core/styles/bind';
import styles from './user-foods.module.css';
import { FoodsMother } from '@/features/foods/domain/foods.mother';
const cx = bind(styles);

export const UserFoodsPage = () => {
  return (
    <main className={cx('wrapper')}>
      <h1 className={cx('title')}>Your Foods</h1>
      <ul className={cx('foods-list')}>
        {FoodsMother.foods().map((food) => (
          <li key={food.id} className={cx('food-item')}>
            <a href={`food/${food.id}`} className={cx('food-wrapper')}>
              <p className={cx('food-name')}>{food.name}</p>
              <img className={cx('food-image')} src={food.image} />
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
};
