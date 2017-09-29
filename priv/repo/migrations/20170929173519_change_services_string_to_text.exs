defmodule Caniagree.Repo.Migrations.ChangeServicesStringToText do
  use Ecto.Migration

  def change do
    alter table(:services) do
      modify :paragraphs, {:array, :text}
    end
  end
end
