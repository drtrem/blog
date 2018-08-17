FactoryGirl.define do

  factory :post do
    name                  'Test test.'
    content               'Test test.'
    file                  { Rack::Test::UploadedFile.new(Rails.root.join('client/public/ONP.jpg'), 'image/jpeg') }
    category
  end

end 


