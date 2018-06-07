class Candidate < ApplicationRecord
  validates :status, inclusion: { in: %w(pending accepted rejected) }
end
