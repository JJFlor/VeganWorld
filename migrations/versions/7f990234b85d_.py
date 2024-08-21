"""empty message

Revision ID: 7f990234b85d
Revises: 343e3db5bc3b
Create Date: 2024-08-14 08:37:19.357118

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7f990234b85d'
down_revision = '343e3db5bc3b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('partner', schema=None) as batch_op:
        batch_op.add_column(sa.Column('type_of_services', sa.String(length=120), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('partner', schema=None) as batch_op:
        batch_op.drop_column('type_of_services')

    # ### end Alembic commands ###
