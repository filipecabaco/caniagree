defmodule Caniagree.Services do
  @moduledoc """
  The Services context.
  """

  import Ecto.Query, warn: false
  alias Caniagree.Repo

  alias Caniagree.Services.Paragraph

  @doc """
  Returns the list of paragraphs.

  ## Examples

      iex> list_paragraphs()
      [%Paragraph{}, ...]

  """
  def list_paragraphs do
    Repo.all(Paragraph)
  end

  @doc """
  Gets a single paragraph.

  Raises `Ecto.NoResultsError` if the Paragraph does not exist.

  ## Examples

      iex> get_paragraph!(123)
      %Paragraph{}

      iex> get_paragraph!(456)
      ** (Ecto.NoResultsError)

  """
  def get_paragraph!(id), do: Repo.get!(Paragraph, id)

  @doc """
  Creates a paragraph.

  ## Examples

      iex> create_paragraph(%{field: value})
      {:ok, %Paragraph{}}

      iex> create_paragraph(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_paragraph(attrs \\ %{}) do
    %Paragraph{}
    |> Paragraph.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a paragraph.

  ## Examples

      iex> update_paragraph(paragraph, %{field: new_value})
      {:ok, %Paragraph{}}

      iex> update_paragraph(paragraph, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_paragraph(%Paragraph{} = paragraph, attrs) do
    paragraph
    |> Paragraph.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Paragraph.

  ## Examples

      iex> delete_paragraph(paragraph)
      {:ok, %Paragraph{}}

      iex> delete_paragraph(paragraph)
      {:error, %Ecto.Changeset{}}

  """
  def delete_paragraph(%Paragraph{} = paragraph) do
    Repo.delete(paragraph)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking paragraph changes.

  ## Examples

      iex> change_paragraph(paragraph)
      %Ecto.Changeset{source: %Paragraph{}}

  """
  def change_paragraph(%Paragraph{} = paragraph) do
    Paragraph.changeset(paragraph, %{})
  end

  alias Caniagree.Services.Service

  @doc """
  Returns the list of services.

  ## Examples

      iex> list_services()
      [%Service{}, ...]

  """
  def list_services do
    Repo.all(Service)
  end

  @doc """
  Gets a single service.

  Raises `Ecto.NoResultsError` if the Service does not exist.

  ## Examples

      iex> get_service!(123)
      %Service{}

      iex> get_service!(456)
      ** (Ecto.NoResultsError)

  """
  def get_service!(id), do: Repo.get!(Service, id)

  @doc """
  Creates a service.

  ## Examples

      iex> create_service(%{field: value})
      {:ok, %Service{}}

      iex> create_service(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_service(attrs \\ %{}) do
    %Service{}
    |> Service.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a service.

  ## Examples

      iex> update_service(service, %{field: new_value})
      {:ok, %Service{}}

      iex> update_service(service, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_service(%Service{} = service, attrs) do
    service
    |> Service.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Service.

  ## Examples

      iex> delete_service(service)
      {:ok, %Service{}}

      iex> delete_service(service)
      {:error, %Ecto.Changeset{}}

  """
  def delete_service(%Service{} = service) do
    Repo.delete(service)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking service changes.

  ## Examples

      iex> change_service(service)
      %Ecto.Changeset{source: %Service{}}

  """
  def change_service(%Service{} = service) do
    Service.changeset(service, %{})
  end
end
