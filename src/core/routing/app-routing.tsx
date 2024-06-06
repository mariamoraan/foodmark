import { createBrowserRouter } from 'react-router-dom';
import { Urls } from './urls';
import { UserFoodsPage } from '@/features/foods/delivery/pages/user-foods/user-foods.page';
import { FoodDetailPage } from '@/features/foods/delivery/pages/food-detail/food-detail.page';

export const AppRouting = createBrowserRouter([
  {
    path: Urls.HOME,
    element: <UserFoodsPage />,
  },
  {
    path: Urls.FOOD_DETAIL,
    element: <FoodDetailPage />,
  },
]);
