web: cd client && PORT=3000 npm start
api: PORT=3001 && bundle exec rails s

Загрузка файлов:
gem 'carrierwave'
gem 'cloudinary'

Тесты:
  gem 'rspec-rails'
  gem 'factory_girl_rails'
  gem 'shoulda-matchers'
  gem 'capybara'
  gem 'selenium-webdriver'
  gem 'database_cleaner'

Axios -  запросы
Lodash – работа с массивами
Формы – без redux-form

Ruby on Rails + 
React + Redux + 
React-router + 
WebSockets -
Background jobs processing -
Responsive front-end component library +

Не получилось:
Не заработал вложенный маршрут:
<Link className = "row justify-content-center" to = {`/category/${category.id }/posts/${post.id }`>

  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      <Route path="categories">
        <IndexRoute component={CategoriesContainer} />
        <Route path=":categoryId" component={Category}>
          <Route path="posts">
            <IndexRoute component={PostsContainer} />
            <Route path=":postId" component={Post} />
          </Route>
        </Route>
      </Route>
    </Route>
  </Router>


