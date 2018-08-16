require "rails_helper"
feature 'Categories', type: :feature, js: true do

  background do
    visit('http://localhost:3000/categories')
  end

  scenario 'have main root container' do
    visit('http://localhost:3000/')
    expect(page).to have_css('#root')
  end

  scenario 'link to category' do
    visit('http://localhost:3000/')
    find('a', text: 'Category').click
    expect(page).to have_text('Add Category')
  end

  scenario 'have category name form' do
    expect(page).to have_css("input[name='name']")
  end

  scenario 'have category description form' do
    expect(page).to have_css("textarea[name='description']")
  end

  scenario 'have add category button' do
    expect(page).to have_text('Add Category')
  end

  scenario 'create category' do
    find(:css, "input[name='name']").set('New category name.')
    find(:css, "textarea[name='description']").set('New category name.')
    find('button', text: 'Add Category').click

    expect(page).to have_text('New category name.')
  end

  scenario 'category dont create if name is not eq regExp' do
    find(:css, "input[name='name']").set('dfgdfg')
    find(:css, "textarea[name='description']").set('New category name.')
    find('button', text: 'Add Category').click

    expect(page).to have_text('Мінімум 2')
  end

  scenario 'deleting category' do
    find(:css, "input[name='name']").set('New category name.')
    find(:css, "textarea[name='description']").set('New category name.')
    find('button', text: 'Add Category').click

    expect(page).to have_text('New category name.')

    find('a', text: 'Delete').click

    expect(page).to_not have_text('New category name.')
  end

  scenario 'edit category name' do
    find(:css, "input[name='name']").set('New category name.')
    find(:css, "textarea[name='description']").set('New category description.')
    find('button', text: 'Add Category').click

    expect(page).to have_text('New category name.')

    find('a', text: 'Edit').click
    find(:css, "input[value='New category name.']").set('Some original name.')
    find('button', text: 'Update Category').click

    expect(page).to_not have_text('New category name.')
    expect(page).to have_text('Some original name.')

  end

  scenario 'change category name to is not eq regExp' do
    find(:css, "input[name='name']").set('New category name.')
    find(:css, "textarea[name='description']").set('New category description.')
    find('button', text: 'Add Category').click

    expect(page).to have_text('New category name.')

    find('a', text: 'Edit').click
    find(:css, "input[value='New category name.']").set('Some original name')
    find('button', text: 'Update Category').click

    expect(page).to have_text("Має включати ‘.’")
  end
end 