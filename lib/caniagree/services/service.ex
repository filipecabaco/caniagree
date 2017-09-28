defmodule Caniagree.Services.Service do
  use Ecto.Schema
  import Ecto.Changeset
  alias Caniagree.Services.Service


  schema "services" do
    field :domain, :string
    field :name, :string
    field :paragraphs, {:array, Ecto.UUID}

    timestamps()
  end

  @doc false
  def changeset(%Service{} = service, attrs) do
    service
    |> cast(attrs, [:name, :domain, :paragraphs])
    |> validate_required([:name, :domain, :paragraphs])
  end
end
