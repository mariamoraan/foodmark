import { bind } from '@/core/styles/bind';
import styles from './food-detail.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Food } from '@/features/foods/domain/food';
import { FoodsMother } from '@/features/foods/domain/foods.mother';
import { ArrowBackIcon, EditIcon } from '@/core/icons';
const cx = bind(styles);

export const FoodDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [food, setFood] = useState<Food | undefined>(undefined);
  const goBack = () => navigate(-1);
  useEffect(() => {
    setFood(FoodsMother.foods().find((food) => food.id === id));
  }, [id]);

  if (!food) return null;

  return (
    <div className={cx('page')}>
      <header className={cx('header')}>
        <button onClick={goBack} className={cx('back-button')}>
          <ArrowBackIcon />
        </button>
      </header>
      <main className={cx('content')}>
        <img className={cx('image')} src={food.image} />
        <div className={cx('data')}>
          <div className={cx('food-menu')}>
            <button className={cx('back-button')}>
              <EditIcon />
            </button>
          </div>
          <h1 className={cx('food-title')}>{food.name}</h1>
          <p className={cx('food-categories')}>
            {food.categories.slice(0, 3).map((category, index) => (index === 0 ? category.name : `, ${category.name}`))}
            {food.categories.length > 3 && '...'}
          </p>
          <h2>Recipe</h2>
          <p className={cx('food-recipe')}>{food.recipe}</p>
        </div>
      </main>
    </div>
  );
};
