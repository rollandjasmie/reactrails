class Chambre < ApplicationRecord
    belongs_to :logement
    has_many :lits
end
