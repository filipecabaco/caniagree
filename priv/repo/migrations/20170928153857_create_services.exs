defmodule Caniagree.Repo.Migrations.CreateServices do
  use Ecto.Migration

  def change do
    create table(:services) do
      add :name, :string
      add :domain, :string
      add :paragraphs, {:array, :uuid}

      timestamps()
    end

  end
end
