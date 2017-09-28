defmodule Caniagree.Repo.Migrations.CreateParagraphs do
  use Ecto.Migration

  def change do
    create table(:paragraphs) do
      add :body, :string
      add :up_vote, :integer
      add :down_vote, :integer

      timestamps()
    end

  end
end
