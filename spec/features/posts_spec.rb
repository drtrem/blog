require "rails_helper"
feature 'Post', type: :feature, js: true do 

  background do
    visit('http://localhost:3000/categories')
  end

  before(:each) do
    find(:css, "input[name='name']").set('New category name.')
    find(:css, "textarea[name='description']").set('New category description.')
    find('button', text: 'Add Category').click

    find(:css, "a[href='/categories/1']").click
  end

  scenario 'have post button' do
    expect(page).to have_text('Add Post')
  end

  scenario 'create post' do
    find(:css, "input[name='name']").set('New post name.')
    find(:css, "textarea[name='content']").set('New post content.')
    attach_file('exampleFormControlFile1', File.absolute_path('./client/public/favicon.ico'))
    find('button', text: 'Add Post').click

    expect(page).to have_text('New post name.')
  end

  scenario 'post dont create if name is not eq regExp' do
    find(:css, "input[name='name']").set('fff')
    find(:css, "textarea[name='content']").set('New post content.')
    attach_file('exampleFormControlFile1', File.absolute_path('./client/public/favicon.ico'))
    find('button', text: 'Add Post').click

    expect(page).to have_text('Мінімум 2')
  end

  scenario "post dont create if content is ''" do
    find(:css, "input[name='name']").set('New post content.')
    find(:css, "textarea[name='content']").set('')
    attach_file('exampleFormControlFile1', File.absolute_path('./client/public/favicon.ico'))
    find('button', text: 'Add Post').click

    expect(page).to_not have_text('Edit')
  end

  scenario 'post dont create if not file' do
    find(:css, "input[name='name']").set('fff')
    find(:css, "textarea[name='content']").set('New post content.')
    find('button', text: 'Add Post').click

    expect(page).to_not have_text('Edit')
  end

  describe 'Edit, delete post' do
    before(:each) do
      find(:css, "input[name='name']").set('New post name.')
      find(:css, "textarea[name='content']").set('New post content.')
      attach_file('exampleFormControlFile1', File.absolute_path('./client/public/favicon.ico'))
      find('button', text: 'Add Post').click

      expect(page).to have_text('New post name.')
    end

    scenario 'deleting post' do 
      find('a', text: 'Delete').click

      expect(page).to_not have_text('New post name.')
    end

    scenario 'edit post name' do 
      find('a', text: 'Edit').click
      find(:css, "input[value='New post name.']").set('Some original name.')
      find('button', text: 'Update Post').click

      expect(page).to_not have_text('New post name.')
      expect(page).to have_text('Some original name.')
    end

    scenario 'change post name to to is not eq regExp' do
      find('a', text: 'Edit').click
      find(:css, "input[value='New post name.']").set('Some original name')
      find('button', text: 'Update Post').click

      expect(page).to have_text("Має включати ‘.’")
    end

    scenario "link to post" do
      find('a', text: 'Post name:').click

      expect(page).to have_text("New post name.")
    end
  end
end 