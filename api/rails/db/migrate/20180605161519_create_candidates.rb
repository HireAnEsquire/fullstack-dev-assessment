class CreateCandidates < ActiveRecord::Migration[5.2]
  def change
    create_table :candidates do |t|
      t.string :name
      t.integer :years_exp
      t.string :status
      t.datetime :date_applied
      t.boolean :reviewed
      t.text :description

      t.timestamps
    end
  end
end
